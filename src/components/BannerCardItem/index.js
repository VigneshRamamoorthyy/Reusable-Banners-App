import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div>
        <h1 className="headingtext">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
