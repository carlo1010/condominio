/**
 * spurtcommerce mobile app
 * version 4.3
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
export class ProfileModel {
    public address: string;
    public avatar: string;
    public avatarPath: string;
    public zoneId: number;
    public countryId: number;
    public createdDate: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public pincode: string;
    public mobileNumber: string;
    public id: string;
    public lastLogin: string;
    public username: string;

    constructor(profileDetails: any) {
        this.address = profileDetails.address || '';
        this.avatar = profileDetails.avatar || '';
        this.avatarPath = profileDetails.avatarPath || '';
        this.zoneId = profileDetails.zoneId || '';
        this.countryId = profileDetails.countryId || '';
        this.createdDate = profileDetails.createdDate || '';
        this.email = profileDetails.email || '';
        this.firstName = profileDetails.firstName || '';
        this.lastName = profileDetails.lastName || '';
        this.pincode = profileDetails.pincode || '';
        this.mobileNumber = profileDetails.mobileNumber || '';
        this.id = profileDetails.id || '';
        this.lastLogin = profileDetails.lastLogin || '';
        this.username = profileDetails.username || '';
    }
}

