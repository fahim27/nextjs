"use client";
import SubmitButton from '@/components/ui/button/SubmitButton';
import Form from '@/components/ui/form/Form'
import FormikInput from '@/components/ui/input/FormikInput';
import useUserRegisterHook from '@/hooks/web/register/useUserRegisterHook';

export default function RegisterForm() {
    const { formik } = useUserRegisterHook();
    return (
        <Form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <FormikInput formik={formik} name="name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <FormikInput formik={formik} type="email" name="email" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <FormikInput formik={formik} type="password" name="password" />
            </div>
            <SubmitButton formik={formik} />
        </Form>
    )
}
