import Card from ["@/components/common/Card"];
const CardAny = Card as any;

const Home = () => {
  return (
    <div>
        <h1 className="text-xl font-extralight">Home Page</h1> 
        <CardAny
        title="Team Meeting"
        content= "Don't forget the meeting holding tomorrow"
        />
        <CardAny
        title="Project Alpha" 
        content="The initial phase of Project Alpha has been completed successfully." 
        />
        <CardAny
        title="Upcoming Maintenance" 
        content="Scheduled server maintenance will occur this Sunday at 12:00 AM." 
      />
    </div>
    )
}
export default Home;
