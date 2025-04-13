
export default function FormikInput({
    formik,
    name,
    type = "text",
    fillValue = null,
    className = "form-control",
    validationErrorClass = "border-danger",
    ...rest
}) {
    const isValidationError = formik.errors[name] && formik.touched[name];
    const validationMessage = formik.errors[name];
    const value = fillValue || formik.values[name] || "";

    return (
        <>
            <input
                type={type}
                name={name}
                className={`${className} ${isValidationError ? validationErrorClass : ""}`}
                onChange={formik.handleChange}
                value={value}
                {...rest}
            />
            {isValidationError && (
                <span className="text-danger">{validationMessage}</span>
            )}
        </>
    )
}

