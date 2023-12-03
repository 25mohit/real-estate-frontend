const BradCrumpBar = ({ setActiveOpt, activeOpt}) => {
  return (
    <div className="brad-crumb-bar">
        <h3 onClick={() => setActiveOpt('home')} className={`head ${activeOpt === 'home' ? 'active' : ''}`}>Home</h3>
        <h3 onClick={() => setActiveOpt('office')} className={`head ${activeOpt === 'office' ? 'active' : ''}`}>Office</h3>
        <h3 onClick={() => setActiveOpt('commercial')} className={`head ${activeOpt === 'commercial' ? 'active' : ''}`}>Commercial</h3>
        <h3 onClick={() => setActiveOpt('residential')} className={`head ${activeOpt === 'residential' ? 'active' : ''}`}>Residential</h3>
    </div>
  )
}

export default BradCrumpBar