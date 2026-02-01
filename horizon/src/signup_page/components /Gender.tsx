

export function GenderChoosing() {
    return (
        <div className="gender">
            <h2 className="gender_h2">Gender</h2>
            <div className="gender_container">
                <div className="button_with_checkbox button1">
                    <span className="gender_text">Male</span>
                    <input className="checkbox" type="radio" name="gender" value="male"/>
                </div>

                <div className="button_with_checkbox button1">
                    <span className="gender_text">Female</span>
                    <input className="checkbox" type="radio" name="gender" value="female"/>
                </div>

                <div className="button_with_checkbox button2">
                    <span className="gender_text">Prefer not to say</span>
                    <input className="checkbox" type="radio" name="gender" value="none"/>
                </div>
            </div>
        </div>
    )
}