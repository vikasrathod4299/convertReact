
// eslint-disable-next-line react/prop-types, no-unused-vars
const Input = ({id, type, placeholder, label, register, errors}) => {

  return (
    <div className="form-floating mb-3">
        <input className="form-control" id={id} name={id} type={type} placeholder={placeholder} {...register(id,{required:true})}/>
        <label htmlFor={id}>{label}</label>
        {errors[id] && <span className="text-danger"><em className="fa-solid fa-circle-exclamation"></em> {id} is required!</span>}
    </div>
  )
}

export default Input