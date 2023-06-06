import './index.css'

const Banners = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="btn" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}

export default Banners
