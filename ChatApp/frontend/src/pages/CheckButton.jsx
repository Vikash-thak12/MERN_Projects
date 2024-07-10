
const CheckButton = () => {
    return (
        <>
            <div className='flex gap-4'>
                <div className="form-control">
                    <label className="cursor-pointer label flex gap-2">
                        <span className="label-text">Male</span>
                        <input type="checkbox" className="checkbox checkbox-accent" />
                    </label>
                </div>
                <div className="form-control">
                <label className="cursor-pointer label flex gap-2">
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox checkbox-accent" />
                </label>
            </div>
            </div>
        </>
    );
};

export default CheckButton;