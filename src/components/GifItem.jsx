

export const GifItem = ({title, url, id}) => {

  return (
    <div className="card">GifItem
        <img src={url} alt={ title}></img>
        <p>{title}</p>
    </div>
  )
}
