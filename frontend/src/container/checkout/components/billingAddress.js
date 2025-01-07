import PostcodeLookupComponent from "../../../component/postcodeLookup"

const BillingAddress = ({ state, onHandleChange, validator, setAddress }) => {

    return <section>
        <h5 className='p-3 border-dashed tab-description-heading'>Billing Information</h5>
        <div className='card border-0 shadow-sm p-3 my-2'>
            <form id="form" className="form-group flex-wrap row">
                <div className="col-lg-4 pb-3">
                    <label>First Name</label>
                    <input type="text" name="firstName" className="form-control" value={state.firstName} onChange={onHandleChange} />
                </div>
                <div className="col-lg-4 pb-3">
                    <label>Last Name</label>
                    <input type="text" name="lastName" className="form-control" value={state.lastName} onChange={onHandleChange} />
                </div>
                <div className="col-lg-4 pb-3">
                    <label>Email Address</label>
                    <input type="email" name="email" className="form-control" value={state.email} readOnly />
                </div>
                <div className="col-lg-4 pb-3">
                    <label>Phone Number</label>
                    <input type="text" name="phone" className="form-control" value={state.phone} onChange={onHandleChange} />
                    <span className="error-message">{validator.current.message('Phone Number', state.phone, 'required|phone')}</span>
                </div>
            </form>
            <form id="form" className="form-group flex-wrap row">
                <div className="col-lg-4 pb-3 find-address-section">
                    <label>Find My Address</label>
                    <PostcodeLookupComponent onAddressSelected={(address) => setAddress(address)} />
                </div>
                <div className="col-lg-4 pb-3">
                    <label>Address</label>
                    <input type="text" name="address" className="form-control" value={state.address} readOnly />
                </div>
                <div className="col-lg-4 pb-3">
                    <label>Postcode</label>
                    <input id="postcode" type="text" name="postcode" className="form-control" value={state.postcode} readOnly />
                </div>
            </form>
        </div>
    </section>
}

export default BillingAddress