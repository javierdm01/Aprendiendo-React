import './films.css'

function Films({img,title,year}) {

  return (
    <>
      <div className='films-box'>
        <img src={img} alt="" />
        <div className='info-film'>
            <h3>{title}</h3>
            <h4>{year}</h4>
        </div>
      </div>
    </>
  )
}

export default Films