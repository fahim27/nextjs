import { API_ENDPOINT } from "@/lib/constants/endpoints";
import { makeFormDataFromObject, requestExceptionHandler } from "@/lib/helper/helper";
import { notifySuccess } from "@/lib/toast/toast";
import apiClient from "@/services/api/apiClient";
import { useFormik } from "formik";
import * as yup from "yup";
import Cookies from 'js-cookie';

export default function useUserRegisterHook() {
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
                const response = await apiClient.post(API_ENDPOINT.user_register, formData);
                if (response?.data?.success) {
                    notifySuccess(response?.data?.message);
                    Cookies.set('auth_token',response.data.data.token); 
                    formik.resetForm()  
                }else{
                    notifyInfo(response?.data?.message)
                }
            } catch (e) {
                requestExceptionHandler(e)
            }
        },
    })
    return { formik }
}