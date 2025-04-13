import Spinner from "../loader/Spinner";

export default function SubmitButton({ formik, text = "Save", className = "btn btn-primary w-100", ...rest }) {
    return (
        <button
            type="submit"
            className={className}
            disabled={formik.isSubmitting}
            {...rest}
        >
            {formik.isSubmitting ? (
                <Spinner />
            ) : (
                <>
                    {text}
                </>
            )}
        </button>
    )
}
