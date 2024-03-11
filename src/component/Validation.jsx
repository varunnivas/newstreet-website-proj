import * as Yup from 'yup'

export const Validation=Yup.object({
    name:Yup.string().min(4).required("Please Enter Your Name"),
    email:Yup.string().email("Please Enter Valid email").required("Please enter email"),
    password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.'
    ),
    cpassword:Yup.string().oneOf([Yup.ref("password")],"password not matched")
  
})