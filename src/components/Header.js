import React, { useEffect } from 'react'
import Logo from '../img/tomya-logo.svg'

const Header = () => {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 35 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    return (
        <div className='header'>
            <div className="container position-relative">
                <div className='d-flex align-items-center justify-content-between header-section'>
                    <a href="https://www.tomya.com">
                        <img src={Logo} alt="logo" />
                    </a>
                    <div className='header-navbar'>
                        <ul className='list-unstyled mb-0 d-flex'>
                            <li className='dropdown'>
                                <a href="#" className='dropdown-toggle' role="button" aria-expanded="false">Kripto Paralar</a>
                                <ul className="dropdown-menu">
                                    <h2 className='mb-0 pt-1 dropdown-title'>Kripto Paralar</h2>
                                    <div className="row dropdown-menu-items">
                                        <div className="col-xl-2 col-lg-2">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M.51 12.89C2.778 3.78 12.003-1.763 21.11.508c9.108 2.27 14.651 11.496 12.382 20.603-2.271 9.108-11.496 14.65-20.605 12.38C3.78 31.22-1.763 21.995.509 12.888zM16.3 5.923l-.764 3.063c-.407-.094-.805-.184-1.192-.28l.002-.01-2.573-.642-.496 1.991s1.384.318 1.355.337c.756.189.892.689.87 1.085l-2.094 8.395c-.092.23-.326.573-.855.443.019.027-1.355-.338-1.355-.338l-.927 2.134 2.428.605c.452.113.894.231 1.33.343l-.772 3.1 1.863.464.765-3.067a78.12 78.12 0 0 0 1.486.385l-.762 3.053 1.866.465.772-3.094c3.18.602 5.572.36 6.579-2.517.812-2.316-.041-3.652-1.714-4.523 1.218-.28 2.136-1.082 2.381-2.738l.026-.21c.203-2.128-1.483-3.293-3.763-4.08l.764-3.063-1.866-.465-.744 2.983c-.49-.122-.994-.236-1.494-.351l.749-3.003-1.864-.465zM15.573 17c1.235.325 5.195.967 4.607 3.448-.563 2.382-4.372 1.095-5.608.772zm1.543-5.667c1.046.251 4.419.72 3.873 2.824-.522 2.017-3.75.992-4.798.74z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Bitcoin</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Ethereum</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M.51 12.89C2.778 3.78 12.003-1.763 21.11.508c9.108 2.27 14.651 11.496 12.382 20.603-2.271 9.108-11.496 14.65-20.605 12.38C3.78 31.22-1.763 21.995.509 12.888zM16.954 18a5.708 5.708 0 0 0-4.147 1.787l-4.24 4.507a.416.416 0 0 0-.078.454c.067.153.22.252.39.252h2.271c.394 0 .77-.162 1.037-.446l2.63-2.798a2.95 2.95 0 0 1 1.79-.94 2.835 2.835 0 0 1 2.42.875l2.69 2.863c.269.285.646.447 1.04.446h2.273c.168 0 .32-.1.388-.252a.416.416 0 0 0-.078-.453l-4.24-4.508A5.71 5.71 0 0 0 16.956 18zM11.15 9H8.88c-.169 0-.322.1-.39.252a.416.416 0 0 0 .08.454l4.239 4.507a5.708 5.708 0 0 0 8.294 0l4.24-4.508a.416.416 0 0 0 .077-.453.425.425 0 0 0-.388-.252h-2.272a1.423 1.423 0 0 0-1.04.446l-2.69 2.863a2.835 2.835 0 0 1-2.422.875 2.95 2.95 0 0 1-1.79-.94l-2.629-2.798A1.423 1.423 0 0 0 11.151 9z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Ripple</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M.51 12.89C2.778 3.78 12.003-1.763 21.11.508c9.108 2.27 14.651 11.496 12.382 20.603-2.271 9.108-11.496 14.65-20.605 12.38C3.78 31.22-1.763 21.995.509 12.888zM18.517 8h-3.851l-2.069 10.097-2.108 1.484-.49 2.77 2.016-1.413L10.979 26h12.336L24 22.618h-8.485l.992-4.829 5.013-3.514.587-2.87-5.013 3.528L18.518 8z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Litecoin</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.715 4.778H5.184v2.56h3.485v1.236c-2.74.16-4.79.796-4.79 1.559 0 .763 2.05 1.4 4.79 1.559v4.417h2.56v-4.411c2.792-.149 4.893-.793 4.893-1.565 0-.772-2.1-1.416-4.893-1.565v-1.23h3.486v-2.56zm-3.486 4.07c2.404.106 4.197.518 4.197 1.01 0 .572-2.43 1.036-5.426 1.036s-5.425-.464-5.425-1.037c0-.484 1.741-.891 4.094-1.004v1.487a23.98 23.98 0 0 0 2.56.006z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Tether</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Chainlink</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M.51 12.89C2.778 3.78 12.003-1.763 21.11.508c9.108 2.27 14.651 11.496 12.382 20.603-2.271 9.108-11.496 14.65-20.605 12.38C3.78 31.22-1.763 21.995.509 12.888zM16.3 5.923l-.764 3.063c-.407-.094-.805-.184-1.192-.28l.002-.01-2.573-.642-.496 1.991s1.384.318 1.355.337c.756.189.892.689.87 1.085l-2.094 8.395c-.092.23-.326.573-.855.443.019.027-1.355-.338-1.355-.338l-.927 2.134 2.428.605c.452.113.894.231 1.33.343l-.772 3.1 1.863.464.765-3.067a78.12 78.12 0 0 0 1.486.385l-.762 3.053 1.866.465.772-3.094c3.18.602 5.572.36 6.579-2.517.812-2.316-.041-3.652-1.714-4.523 1.218-.28 2.136-1.082 2.381-2.738l.026-.21c.203-2.128-1.483-3.293-3.763-4.08l.764-3.063-1.866-.465-.744 2.983c-.49-.122-.994-.236-1.494-.351l.749-3.003-1.864-.465zM15.573 17c1.235.325 5.195.967 4.607 3.448-.563 2.382-4.372 1.095-5.608.772zm1.543-5.667c1.046.251 4.419.72 3.873 2.824-.522 2.017-3.75.992-4.798.74z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Bitcoin</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Ethereum</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M.51 12.89C2.778 3.78 12.003-1.763 21.11.508c9.108 2.27 14.651 11.496 12.382 20.603-2.271 9.108-11.496 14.65-20.605 12.38C3.78 31.22-1.763 21.995.509 12.888zM16.954 18a5.708 5.708 0 0 0-4.147 1.787l-4.24 4.507a.416.416 0 0 0-.078.454c.067.153.22.252.39.252h2.271c.394 0 .77-.162 1.037-.446l2.63-2.798a2.95 2.95 0 0 1 1.79-.94 2.835 2.835 0 0 1 2.42.875l2.69 2.863c.269.285.646.447 1.04.446h2.273c.168 0 .32-.1.388-.252a.416.416 0 0 0-.078-.453l-4.24-4.508A5.71 5.71 0 0 0 16.956 18zM11.15 9H8.88c-.169 0-.322.1-.39.252a.416.416 0 0 0 .08.454l4.239 4.507a5.708 5.708 0 0 0 8.294 0l4.24-4.508a.416.416 0 0 0 .077-.453.425.425 0 0 0-.388-.252h-2.272a1.423 1.423 0 0 0-1.04.446l-2.69 2.863a2.835 2.835 0 0 1-2.422.875 2.95 2.95 0 0 1-1.79-.94l-2.629-2.798A1.423 1.423 0 0 0 11.151 9z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Ripple</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M.51 12.89C2.778 3.78 12.003-1.763 21.11.508c9.108 2.27 14.651 11.496 12.382 20.603-2.271 9.108-11.496 14.65-20.605 12.38C3.78 31.22-1.763 21.995.509 12.888zM18.517 8h-3.851l-2.069 10.097-2.108 1.484-.49 2.77 2.016-1.413L10.979 26h12.336L24 22.618h-8.485l.992-4.829 5.013-3.514.587-2.87-5.013 3.528L18.518 8z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Litecoin</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.715 4.778H5.184v2.56h3.485v1.236c-2.74.16-4.79.796-4.79 1.559 0 .763 2.05 1.4 4.79 1.559v4.417h2.56v-4.411c2.792-.149 4.893-.793 4.893-1.565 0-.772-2.1-1.416-4.893-1.565v-1.23h3.486v-2.56zm-3.486 4.07c2.404.106 4.197.518 4.197 1.01 0 .572-2.43 1.036-5.426 1.036s-5.425-.464-5.425-1.037c0-.484 1.741-.891 4.094-1.004v1.487a23.98 23.98 0 0 0 2.56.006z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Tether</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Chainlink</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.715 4.778H5.184v2.56h3.485v1.236c-2.74.16-4.79.796-4.79 1.559 0 .763 2.05 1.4 4.79 1.559v4.417h2.56v-4.411c2.792-.149 4.893-.793 4.893-1.565 0-.772-2.1-1.416-4.893-1.565v-1.23h3.486v-2.56zm-3.486 4.07c2.404.106 4.197.518 4.197 1.01 0 .572-2.43 1.036-5.426 1.036s-5.425-.464-5.425-1.037c0-.484 1.741-.891 4.094-1.004v1.487a23.98 23.98 0 0 0 2.56.006z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Tether</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Chainlink</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.715 4.778H5.184v2.56h3.485v1.236c-2.74.16-4.79.796-4.79 1.559 0 .763 2.05 1.4 4.79 1.559v4.417h2.56v-4.411c2.792-.149 4.893-.793 4.893-1.565 0-.772-2.1-1.416-4.893-1.565v-1.23h3.486v-2.56zm-3.486 4.07c2.404.106 4.197.518 4.197 1.01 0 .572-2.43 1.036-5.426 1.036s-5.425-.464-5.425-1.037c0-.484 1.741-.891 4.094-1.004v1.487a23.98 23.98 0 0 0 2.56.006z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Tether</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Chainlink</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.715 4.778H5.184v2.56h3.485v1.236c-2.74.16-4.79.796-4.79 1.559 0 .763 2.05 1.4 4.79 1.559v4.417h2.56v-4.411c2.792-.149 4.893-.793 4.893-1.565 0-.772-2.1-1.416-4.893-1.565v-1.23h3.486v-2.56zm-3.486 4.07c2.404.106 4.197.518 4.197 1.01 0 .572-2.43 1.036-5.426 1.036s-5.425-.464-5.425-1.037c0-.484 1.741-.891 4.094-1.004v1.487a23.98 23.98 0 0 0 2.56.006z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Tether</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Chainlink</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.715 4.778H5.184v2.56h3.485v1.236c-2.74.16-4.79.796-4.79 1.559 0 .763 2.05 1.4 4.79 1.559v4.417h2.56v-4.411c2.792-.149 4.893-.793 4.893-1.565 0-.772-2.1-1.416-4.893-1.565v-1.23h3.486v-2.56zm-3.486 4.07c2.404.106 4.197.518 4.197 1.01 0 .572-2.43 1.036-5.426 1.036s-5.425-.464-5.425-1.037c0-.484 1.741-.891 4.094-1.004v1.487a23.98 23.98 0 0 0 2.56.006z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Tether</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Chainlink</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.715 4.778H5.184v2.56h3.485v1.236c-2.74.16-4.79.796-4.79 1.559 0 .763 2.05 1.4 4.79 1.559v4.417h2.56v-4.411c2.792-.149 4.893-.793 4.893-1.565 0-.772-2.1-1.416-4.893-1.565v-1.23h3.486v-2.56zm-3.486 4.07c2.404.106 4.197.518 4.197 1.01 0 .572-2.43 1.036-5.426 1.036s-5.425-.464-5.425-1.037c0-.484 1.741-.891 4.094-1.004v1.487a23.98 23.98 0 0 0 2.56.006z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Tether</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Chainlink</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.715 4.778H5.184v2.56h3.485v1.236c-2.74.16-4.79.796-4.79 1.559 0 .763 2.05 1.4 4.79 1.559v4.417h2.56v-4.411c2.792-.149 4.893-.793 4.893-1.565 0-.772-2.1-1.416-4.893-1.565v-1.23h3.486v-2.56zm-3.486 4.07c2.404.106 4.197.518 4.197 1.01 0 .572-2.43 1.036-5.426 1.036s-5.425-.464-5.425-1.037c0-.484 1.741-.891 4.094-1.004v1.487a23.98 23.98 0 0 0 2.56.006z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Tether</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Chainlink</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.715 4.778H5.184v2.56h3.485v1.236c-2.74.16-4.79.796-4.79 1.559 0 .763 2.05 1.4 4.79 1.559v4.417h2.56v-4.411c2.792-.149 4.893-.793 4.893-1.565 0-.772-2.1-1.416-4.893-1.565v-1.23h3.486v-2.56zm-3.486 4.07c2.404.106 4.197.518 4.197 1.01 0 .572-2.43 1.036-5.426 1.036s-5.425-.464-5.425-1.037c0-.484 1.741-.891 4.094-1.004v1.487a23.98 23.98 0 0 0 2.56.006z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Tether</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34">
                                                    <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Chainlink</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 mt-1">
                                            <div className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                                                    <path fill="#5952E4" fillRule="nonzero" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.715 4.778H5.184v2.56h3.485v1.236c-2.74.16-4.79.796-4.79 1.559 0 .763 2.05 1.4 4.79 1.559v4.417h2.56v-4.411c2.792-.149 4.893-.793 4.893-1.565 0-.772-2.1-1.416-4.893-1.565v-1.23h3.486v-2.56zm-3.486 4.07c2.404.106 4.197.518 4.197 1.01 0 .572-2.43 1.036-5.426 1.036s-5.425-.464-5.425-1.037c0-.484 1.741-.891 4.094-1.004v1.487a23.98 23.98 0 0 0 2.56.006z"></path>
                                                </svg>
                                                <div className='dropdown-item-title ms-2'>Tether</div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Market</a>
                            </li>
                            <li>
                                <a href="#">Komisyonlar</a>
                            </li>
                            <li>
                                <a href="#">Hakkımızda</a>
                            </li>
                            <li>
                                <a href="#">Basında Biz</a>
                            </li>
                            <li>
                                <a href="#">Duyurular</a>
                            </li>
                            <li>
                                <a href="#">İletişim</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li className='header-login-btn'>
                                <a href="#">Giriş Yap</a>
                            </li>
                            <li>
                                <a href="#">Kayıt Ol</a>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile Menu */}
                    <div className='mobile-menu-display'>
                        <a href="https://pro.tomya.com/panel" className='me-3'>
                            <i className="fa-solid fa-user fa-lg text-white"></i>
                        </a>
                        <button className="btn btn-mobile-bar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fa-solid fa-bars"></i></button>
                        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header justify-content-end">
                                <button type="button" className="btn-close btn-close-custom d-flex align-items-center justify-content-center" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark text-white"></i></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className='mobile-menu-items'>
                                    <div className='menu-item'>
                                        Kripto Paralar
                                    </div>
                                    <div className='menu-item'>
                                        Market
                                    </div>
                                    <div className='menu-item'>
                                        Komisyonlar
                                    </div>
                                    <div className='menu-item'>
                                        Hakkımızda
                                    </div>
                                    <div className='menu-item'>
                                        Basında Biz
                                    </div>
                                    <div className='menu-item'>
                                        Duyurular
                                    </div>
                                    <div className='menu-item'>
                                        İletişim
                                    </div>
                                    <div className='menu-item'>
                                        Blog
                                    </div>
                                </div>
                                <div className='d-flex flex-column mobile-btns mt-5'>
                                    <button className='mobile-login-btn'>Giriş Yap</button>
                                    <button>Kayıt Ol</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end align-items-center header-notification mt-3'>
                    <span className='me-3'><i className="fa-solid fa-bell me-1"></i> Planlı Bakım Çalışması</span> <a href="#">Devamını Oku <i className="fa-solid fa-chevron-right chevron-icon ms-1"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Header;