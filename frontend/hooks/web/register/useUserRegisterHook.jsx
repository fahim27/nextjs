import { API_ENDPOINT } from "@/lib/constants/endpoints";
import { makeFormDataFromObject } from "@/lib/helper/helper";
import apiClient from "@/services/api/apiClient";
import { useFormik } from "formik";
import * as yup from "yup";

export default function useUserRegisterFormFormik() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            password: yup.string().required(),
        }),
        onSubmit: async (values) => {
            const formData = makeFormDataFromObject(values)
            try {
                const resp = await apiClient.post(API_ENDPOINT.user_register, formData);
                console.log("this is response", resp);
            } catch (e) {
                requestExceptionMessage(e)
            }
        },
    })
    return { formik }
}