import PropTypes from "prop-types";

const JobModel = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed bg-black bg-opacity-30 inset-0 lg:px-0 px-4  z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          {/*content*/}
          <div className="relative  flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className=" w-full bg-rose-500 flex items-start justify-center p-2 border-b border-solid rounded-t-lg border-blueGray-200">
              <h3 className="text-3xl font-semibold text-center">{title}</h3>
            </div>
            {/*body*/}
            <div className=" flex items-center justify-center p-5 border-b border-solid rounded-t-lg border-blueGray-200 ">
              <h1 className=" w-full text-center ">{children}</h1>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-4 border-t border-solid rounded-b-lg border-blueGray-200">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

JobModel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

export default JobModel;
