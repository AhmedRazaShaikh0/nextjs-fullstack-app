export default function page() {
  const handleForm = async (FormData: any) => {
    "use server";
    console.log("first");
    console.log(FormData);
    const username = FormData.get("username");
    console.log("🚀 ~ handleForm ~ username:", username)
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
}
