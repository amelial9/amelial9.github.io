function IconLink({ href, src, alt }) {
  return (
    <a href={href} target="_blank">
      <img src={src} alt={alt} className="iconlinks"></img>
    </a>
  )
}

export default IconLink;