import { redirect } from "next/navigation";
import { prisma } from "../lib/db/prisma";

export const metadata = {
  title: 'Add Product',
}

async function addProduct(formData: FormData) {
"use server"
//This tells Next.js to run this function on the server side

const name = formData.get("name")?.toString()
const description = formData.get("description")?.toString()
const imageUrl = formData.get("imageUrl")?.toString()
const price = Number(formData.get("price") || 0)

if (!name || !description || !imageUrl || !price) {
  throw new Error("Please fill out all fields")
}

await prisma.product.create({
  data: {name, description, imageUrl, price},
})

redirect("/")
}


const AddProductPage = () => {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input 
        required
        name="name"
        placeholder="Name"
        className="input input-bordered mb-3 w-full"
        />
        <textarea
        required
        name="description"
        placeholder="Description"
        className="textarea textarea-bordered mb-3 w-full"
        />
          <input
        required
        name="imageUrl"
        placeholder="Image URL"
        type="url"
        className="textarea textarea-bordered mb-3 w-full"
        />
          <input
        required
        name="price"
        placeholder="Price"
        type="number"
        className="textarea textarea-bordered mb-3 w-full"
        />
        <button className="btn btn-primary btn-block"type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductPage;