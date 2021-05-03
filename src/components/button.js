const Button = ({label}) => {
    return (
      <button className="ml-4 capitalize border-2 py-2 px-8 font-medium rounded-xl bg-indigo-900 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
          {label}
      </button>
    );
}

export default Button;