async function getFact() {
    console.log('fact called');
    id = Math.floor(Math.random() * 121);
      const info = await fetch(`/api/fact/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      if (info.ok) {
          console.log(info);

      } else {
        alert("Fact Not Found");
      }
    }


