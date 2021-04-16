function ErrorField({ errorString }) {
  if (errorString === "") {
    return null;
  }
  return (
    <div className="col-12">
      <span className="error">{errorString}</span>
    </div>
  )
}

export default ErrorField;
