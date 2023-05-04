
// eslint-disable-next-line react/prop-types, no-unused-vars
const Textarea = ({style, id, type, placeholder, label, validations}) => {

    // eslint-disable-next-line no-unused-vars, react/prop-types
    const validationArray = validations.split(',')

  return (
    <div className="form-floating mb-3">
        <textarea className="form-control" id={id} type={type} placeholder={placeholder} style={style} data-sb-validations={validations}></textarea>
        <label htmlFor="message">{label}</label>
        {validationArray.map((validation) => (<div key={validation} className="invalid-feedback" data-sb-feedback={id+":"+validation}>A {id} is required!</div>) )}
    </div>
  )
}

export default Textarea