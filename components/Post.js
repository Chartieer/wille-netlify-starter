function Post({ date, image, title }) {
  let { file, description } = image
  console.log(title)
  return (
    <div className="post">
      <img style={{ width: '500px' }} alt={description} src={`https:${file.url}`} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
      </div>
    </div>
  )
}

export default Post