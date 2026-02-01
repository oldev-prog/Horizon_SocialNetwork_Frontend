
export function DateOfBirth() {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    return (
        <div className="date_birth">
            <h2 className="date_h2">Date of birth</h2>
            <div className="date_container">
                <select name="day" className="input_field date">
                    <option value="">Day</option>
                    {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
                <select name="month" className="input_field date">
                    <option value="">Month</option>
                    {months.map((month, index) => (
                        <option key={month} value={index + 1}>{month}</option>
                    ))}
                </select>
                <select name="year" className="input_field date">
                    <option value="">Year</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}