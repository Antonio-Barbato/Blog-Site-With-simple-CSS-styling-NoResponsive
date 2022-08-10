import Sidebar from '../../sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img
                    src='https://scontent-mxp2-1.xx.fbcdn.net/v/t1.6435-9/75282398_10215113743733425_7596294702639349760_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L2ub94cAggQAX86Q658&_nc_ht=scontent-mxp2-1.xx&oh=00_AT_xApYnabzib7POEaLybyKOIm7DuRwkOA1BeP5ln_4_ZQ&oe=631991C3'
                    alt='Antonio'
                    />
                    <label htmlFor='fileInput'><i className='settingsPPIcon far fa-user-circle'></i></label>
                    <input type='file' id='fileInput' style={{display:'none'}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Antonio'/>
                <label>Email</label>
                <input type="email" placeholder='Antonio@example.com'/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
