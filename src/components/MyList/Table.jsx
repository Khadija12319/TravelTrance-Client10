import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'

const Table = ({ spot, spots, setSpots }) => {
  const {_id}=spot;
  const handleDelete = _id =>{
    console.log(_id);
    Swal.fire({
      title:'Are you sure to delete?',
      text:"You won't be able to revert this!",
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#DD6B20',
      cancelButtonColor: '#d33',
      confirmButtonText:'Yes, delete it!'
    }).then((result) => {
      if(result.isConfirmed){
        fetch(`http://localhost:5000/spots/${_id}`,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'The Spot has been deleted.',
              'success'
            )
            const remaining = spots.filter(spo => spo._id !== _id);
            setSpots(remaining);
          }
        })
      }
    })
  }
    return (
      <tr className="border-b-2 border-gray-300">
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">{spot.spotname}</td>
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">{spot.season}</td>
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">{spot.cost}</td>
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">{spot.time}</td>
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">{spot.visitor}</td>
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat space-x-5 items-center flex justify-center">
          <button className="bg-orange-600 px-3 py-2 text-white rounded-md"><Link to={`/updatespot/${_id}`}>Update</Link></button>
          <button onClick={()=>handleDelete(_id)}><a className="my-anchor-element"><MdDelete className="text-4xl" /></a></button>
        </td>
        <Tooltip anchorSelect=".my-anchor-element" place="top" clickable>
        <button>You can click me!</button>
        </Tooltip>
      </tr>
    );
  };

  Table.propTypes = {
    spot:PropTypes.array,
    spots:PropTypes.array,
    setSpots: PropTypes.func
  }
  
  export default Table;