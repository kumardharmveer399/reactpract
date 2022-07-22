import React from 'react';
import web from '../src/image/Department.svg';
import web2 from '../src/image/magazine.jpg';
import Common from './Common'





const Department = () => {
    return (
        <>
            <Common hname='BIT Sindri Civil Engineering ' bname='Explore' image={web} pname='Department Details' />
            <div className='section_padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Proffesor Name</th>
                                        <th>Designation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Dr. Ranvijay Singh</td>
                                        <td>HoD & Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Dr. Vikrama Pandey</td>
                                        <td>Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Dr. U.k Singh</td>
                                        <td>Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Dr. Jitu Kujur</td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Prof. Ajit kumar Singh</td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Prof. Chitranjan Sharma</td>
                                        <td>AssociateProffesor</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Prof. J.P Singh</td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Prof. Krishna Murari </td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Dr. Nishikant Kisku</td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>	Prof. P.K Sharma</td>
                                        <td>Associate  Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>	Prof. Sheo Kumar</td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>Prof. Shyam Kishor Kumar</td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Mr. Abhijit Anand</td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>Mr. Rabindra Kumar</td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>Ms. Sudha Das Khan</td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td>Iqbal Sheikh</td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td>Saroj Meena</td>
                                        <td>Associate Proffesor</td>
                                    </tr>

                                    <tr>
                                        <td>18</td>
                                        <td>	Prashant Malviya</td>
                                        <td>Associate Proffesor</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Department;