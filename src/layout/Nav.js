import './Nav.css';

function navbar(){
    return(
        
        <div className="navbar">
            <h2 className="menu">
                <a href={`/`}>home</a> 
            </h2>
            <h2 className="menu">
                <a href={`/skill`}>스킬</a> 
            </h2>
            <h2 className="menu">
                <a href={`/project`}>프로젝트</a> 
            </h2>
            <h2 className="menu">
                <a href={`https://github.com/mewzzangzzang`}>깃허브</a> 
            </h2>
        
        </div>
      

    );
}
export default navbar;