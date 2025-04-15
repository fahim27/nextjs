"use client";
import { API_ENDPOINT } from "@/lib/constants/endpoints";
import { makeFormDataFromObject, requestExceptionHandler } from "@/lib/helper/helper";
import { notifyError, notifySuccess } from "@/lib/toast/toast";
import apiClient from "@/services/api/apiClient";
import { useFormik } from "formik";
import * as yup from "yup";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server';


export default function useUserLoginHook() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required(),
            password: yup.string().required(),
        }),
        onSubmit: async (values) => {
            const formData = makeFormDataFromObject(values)
            try {
                const response = await apiClient.post(API_ENDPOINT.user_login, formData);
                if (response?.data?.success) {
                    notifySuccess(response?.data?.message);
                    Cookies.set('auth_token', response.data.data.token);
                    formik.resetForm();
                    router.push('/user/dashboard');
                } else {
                    notifyError(response.data.message);
                }
            } catch (e) {
                requestExceptionHandler(e)
            }
        },
    })
    return { formik }
}