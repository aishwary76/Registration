const Student = require('./../models/student');
const catchAsync = require('./../utils/catchAsync');
const Due = require('./../models/lib_due');

exports.register = catchAsync(async(req,res,next)=>{
    const student = await Student.create({
                                                    full_name:req.body.full_name,
                                                    student_no:req.body.student_no,
                                                    roll_no:req.body.roll_no,
                                                    course:req.body.course,
                                                    branch:req.body.branch,
                                                    email:req.body.email,
                                                    mobile:req.body.mobile,
                                                    father_name:req.body.father_name,
                                                    year:req.body.year,
                                                    semester:req.body.semester
                                                    
    });
    res.status(200).json({
        status:'success',
        message:'you have been successfully registered',
        data:{
            student
        }
    });

});

exports.registerDue = catchAsync( async (req,res,next)=>{
    const due = await Due.create({
        Roll_no:req.body.Roll_no,
        full_name:req.body.full_name,
        due:req.body.lib_due
    });
    res.status(200).json({
        status:'success',
        message:'you have been successfully registered in due table',
        data:{
            due
        }
    });
})