import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBInput, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdown, MDBBtn, MDBNavbarItem } from "mdb-react-ui-kit";
import { useState } from "react";
import Styles from "./checkout.module.css"
import CartSums from "../cart/CartSums";

export default function Checkout() {

  // حالة لتخزين الاختيار من القائمة المنسدلة
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // دالة لتحديث القيمة عند اختيار عنصر من القائمة
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };
  const handleSelectState = (state) => {
    setSelectedState(state);
  };

  return (
    <MDBContainer id={Styles.container}>
      <MDBRow>
        <MDBCol lg={8}>
          <form action="" className="p-2 border">
            <div className="mb-2 p-1 border">
              <MDBTypography tag='h3' className="m-0 p-0">Billing Address</MDBTypography>
            </div>
            <MDBRow className="gap-2 gap-md-0 mb-2">
              <MDBCol md="6">
                <MDBInput label="First Name" type="text" />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput label="Last Name" type="text" />
              </MDBCol>
            </MDBRow>
            <MDBInput label="Email" type="email" className="mb-2" />
            <MDBInput label="Address" type="text" className="mb-2" />
            <MDBInput label="Address 2 (Optional)" type="text" className="mb-2" />
            <MDBRow>
              <MDBCol>
                <MDBCol className="d-flex flex-column gap-2 flex-lg-row">
                  <MDBCol>
                    <MDBDropdown>
                      <MDBDropdownToggle tag="a" className="nav-link">
                        Select Country
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="p-3">
                        <MDBDropdownItem onClick={() => handleSelectCountry("USA")}>USA</MDBDropdownItem>
                        <MDBDropdownItem onClick={() => handleSelectCountry("Canada")}>Canada</MDBDropdownItem>
                        <MDBDropdownItem onClick={() => handleSelectCountry("Australia")}>Australia</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                    {/* حقل الإدخال الذي سيعرض القيمة المختارة */}
                    <MDBInput
                      label="Country Selected"
                      type="text"
                      value={selectedCountry}  // ربط القيمة من الحالة
                      readOnly  // لمنع تعديل المستخدم للقيمة يدويًا
                      className="mt-2"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBDropdown>
                      <MDBDropdownToggle tag="a" className="nav-link">
                        Select State
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="p-3">
                        <MDBDropdownItem onClick={() => handleSelectState("New York")}>New York</MDBDropdownItem>
                        <MDBDropdownItem onClick={() => handleSelectState("Montero")}>Montero</MDBDropdownItem>
                        <MDBDropdownItem onClick={() => handleSelectState("Cidney")}>Cidney</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>

                    {/* حقل الإدخال الذي سيعرض القيمة المختارة */}
                    <MDBInput
                      label="State Selected"
                      type="text"
                      value={selectedState}  // ربط القيمة من الحالة
                      readOnly  // لمنع تعديل المستخدم للقيمة يدويًا
                      className="mt-2"
                    />
                  </MDBCol>
                  <MDBCol className="align-self-lg-end mt-1">
                    <MDBInput label="Zip" type="text" />
                  </MDBCol>
                </MDBCol>
              </MDBCol>
            </MDBRow>
              <div className="my-2 p-1 border">
                <MDBTypography tag='h3' className="m-0 p-0">Payment</MDBTypography>
              </div>
            <MDBRow className="mt-2">
              <MDBCol md={6}>
                <MDBInput label="Name On Card" type="text" className="mb-2" />
              </MDBCol>
              <MDBCol md={6}>
                <MDBInput label="Credit Card Number" type="text" className="mb-2" />
              </MDBCol>
              <MDBCol md={6}>
                <MDBInput label="Expiration Date" type="text" className="mb-2" />
              </MDBCol>
              <MDBCol md={6}>
                <MDBInput label="CCV" type="text" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="d-flex flex-column gap-2 my-2 flex-lg-row">
                <MDBBtn type="submit" className="w-100" color="primary">Submit</MDBBtn>
                <MDBBtn type="text" className="w-100" color="danger">Cancel</MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBCol>
        <MDBCol lg={4}>
          {/* <CartSums /> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}