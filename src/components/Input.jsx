
// eslint-disable-next-line react/prop-types
const Input = ({id, type, placeholder, label, validations}) => {

    // eslint-disable-next-line no-unused-vars, react/prop-types
    const validationsArray = validations.split(',')

  return (
    <div className="form-floating mb-3">
        <input className="form-control" id={id} type={type} placeholder={placeholder} data-sb-validations={validations} />
        <label htmlFor={id}>{label}</label>
        {validationsArray.map((validation) => (<div key={validation} className="invalid-feedback" data-sb-feedback={id+":"+validation}>A {id} is required!</div>) )}
    </div>
  )
}

export default Input