const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');
const RegisterStudent =  require('./../models/register_student');
//const Student = require('./../models/student');

exports.register = catchAsync(async(req,res,next)=>{
    //const dStudent = await Student.findOne({student_no :req.body.student_no});
    const student = await RegisterStudent.create({
                                                    full_name:req.body.full_name,
                                                    student_no:req.body.student_no,
                                                    roll_no:req.body.roll_no,
                                                    session:req.body.session,//dStudent.session
                                                    semester:req.body.semester,//dStudent.semester
                                                    course:req.body.course,
                                                    branch:req.body.branch,
                                                    email:req.body.email,
                                                    mobile:req.body.mobile,
                                                    father_name:req.body.father_name,
                                                    address:req.body.address,
                                                    year:req.body.year//dStudent.year
    });
    res.status(200).json({
        status:'success',
        message:'you have been successfully registered',
        data:{
            student
        }
    });

});