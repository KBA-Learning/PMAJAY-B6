//SPDX-License-Identifier:MIT

pragma solidity 0.8.30;

contract Cert {
    struct certificate {
        string name;
        string course;
        string grade;
        string date;
    }

    mapping(uint256 => certificate)public Certificates;

    address admin;

    constructor(){
        admin = msg.sender;
    }
    modifier onlyAdmin{
        require(msg.sender==admin,"Only admin can deploy");
        _;
    }

    function issue(
        uint256 _id,
        string memory _name,
        string memory _course,
        string memory _grade,
        string memory _date
    ) public onlyAdmin{
       
        Certificates[_id] = certificate(_name,_course,_grade,_date);
        
    }

    
}
