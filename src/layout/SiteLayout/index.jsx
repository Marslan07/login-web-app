
/**
 * Site Component is used to support the full page layout
 */
const Site = (Content) => (props) => {
  return (
    <div className='flex w-full'>
     
        <Content {...props} />
     
    </div>
  );
};

export default Site;
