import './Spinner.css';


export const Spinner = () => {
    return (
        <div className="SpinnerWrapper center">
            <div className="spinner">
            </div>
            <h3 className="loaderName">Loading.....</h3>
        </div>
    );
}