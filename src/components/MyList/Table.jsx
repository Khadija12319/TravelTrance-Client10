import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Table = ({ spot }) => {
    return (
      <tr className="border-b-2 border-gray-300">
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">{spot.spotname}</td>
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">{spot.season}</td>
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">{spot.cost}</td>
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">{spot.time}</td>
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">{spot.visitor}</td>
        <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat space-x-5">
          <button className="bg-orange-600 px-3 py-2 text-white rounded-md"><Link to="/update">Update</Link></button>
          <button className="bg-orange-600 px-3 py-2 text-white rounded-md">Delete</button>
        </td>
      </tr>
    );
  };

  Table.propTypes = {
    spot:PropTypes.array
  }
  
  export default Table;