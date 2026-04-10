'use client';

import { useState, useEffect } from "react";

const Footer: any = () => {
    return (
        <>
        <div id="copyright-section" className="copyright-section bg-white p-0 m-0">
            <div className="max-w-7xl mx-auto px-4">              
                <div className="copyright">
                    <p id="copyright-footer" className="copyright">
                        &copy;{new Date().getFullYear()} SteepRock Inc. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;
{/*  */}