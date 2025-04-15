"use client";
import SubmitButton from '@/components/ui/button/SubmitButton';
import Form from '@/components/ui/form/Form'
import FormikInput from '@/components/ui/input/FormikInput';
import useUserLoginHook from '@/hooks/web/login/useUserRegisterHook';

export default function LoginForm() {
    const { formik } = useUserLoginHook();
    return (
        <Form onSubmit={formik.handleSubmit}>
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
