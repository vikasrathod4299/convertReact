
// eslint-disable-next-line react/prop-types, no-unused-vars
const Textarea = ({style, id, type, placeholder, label, register, errors}) => {


  return (
    <div className="form-floating mb-3">
        <textarea className="form-control" id={id} name={id} type={type} placeholder={placeholder} style={style} {...register(id,{required:true})}></textarea>
        <label htmlFor="message">{label}</label>
        {errors[id] && <span className="text-danger"><em className="fa-solid fa-circle-exclamation"></em> {id} is required!</span>}
    </div>
  )
}

export default Textarea