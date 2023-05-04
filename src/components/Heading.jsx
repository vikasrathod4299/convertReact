

// eslint-disable-next-line react/prop-types
const Heading = ({color, body}) => {
  return (
    <h2 className={`page-section-heading text-center text-uppercase text-${color}`}>{body}</h2>
  )
}

export default Heading