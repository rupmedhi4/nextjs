import { NextResponse } from "next/server"

export default function Middleware(request) {

  //  if(request.nextUrl.pathname !=="/login"){
        return NextResponse.redirect(new URL("/login", request.url))

  //  }

}

export const config ={
  matcher : ["/about/:path*", '/studentslist/:path*']
  // matcher : ["/about/aboutcollege"]
}