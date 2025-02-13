"use client";
import ConnectCard from "@/components/common/ConnectCard";
import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { Key, useEffect, useState } from "react";
import SecondaryTable from "./SecondaryTable";
import { toast } from "react-toastify";
import Loading from "@/components/loading/Loading";

type Props = {};

const Ashtakvarga = (props: Props) => {
  const [ashtakvargadetail, setashtakvargadetail] = useState<any>({});
  const [ashtakvargatype, setAshtakvargatype] = useState<any>({});
  const [ashtakvargsign, setAshtakvargasign] = useState<any>({});
  const [asthtak, setAshtak] = useState<any>({});
  const [ob, setob] = useState<any>({});
  
  
  useEffect(() => {
    const planetResponse =  async () => {
      let bodyData: any;
      let ashtakvargaData:any;
      if (typeof window !== "undefined") {
        bodyData = localStorage.getItem("kundliData");
       
      }
      
      const getashtakvarga = await postFetcher("/kundli/ashtakvarga", bodyData);
      

      if (getashtakvarga?.status) {
        
        setashtakvargadetail( getashtakvarga?.res);
        
        
      }
       

      
    };


    planetResponse();
  },[]);
  if(Object.keys(ashtakvargadetail).length > 0){

  }
  else{
    return (
      <div className="text-center">
        <Loading></Loading>
      </div>
    )
  }

  
  return (
    <div className="mb-20 space-y-20">
      <Section>
        <div className="space-y-4 text-justify">
          <p className="mb-2 font-medium">Ashtakvarga Chart</p>
          <p className="">
            Ashtakvarga is used to assess the strength and patterns that are
            present in a birth chart. The Ashtakvarga or Ashtakavarga is a
            numerical quantification or score of each planet placed in the chart
            with reference to the other 7 planets and the Lagna. In Sarva
            Ashtaka Varga the total scores of all the BAVs are overlaid and then
            totalled. This makes the SAV of the chart. The total of all the
            scores should be 337.
          </p>
          <br>
          </br>
          <table className="w-full whitespace-normal text-left text-sm">

            <tbody>

              <tr

                className="border-b border-gray-400 bg-white"
              >
                


                  
                    <td className="border-r border-gray-400 px-6 py-4">

                      <strong> Ashtak Varga Type : </strong> {ashtakvargadetail.ashtak_varga.type}
                    </td>
                    <td className="border-r border-gray-400 px-6 py-4">
                      <strong> Ashtak Varga Sign </strong> : {ashtakvargadetail.ashtak_varga.sign}
                    </td>
                 
               

              </tr>
                <tr>
                  <td className="border-r border-gray-400 px-6 py-4">
                     Ashtak Points
                    </td>
                    
                </tr>
               <tr>
                </tr>
               { Object.entries( ashtakvargadetail.ashtak_points ).map( ( [key, value] ) => {
        return (
          <div>   // PROBLEM SHOULD RETURN
          <tr key={key}>
            <td  className="border-b border-gray-400 bg-white border-r border-gray-400 px-6 py-4">
             <td>  <p className="border-r border-gray-400 px-6 py-4"> <strong> { key } </strong> </p> </td>
            </td>
            </tr>
            <tr>
            <td className="border-b border-gray-400 bg-white">
            { Object.entries( value || "" ).map( ( [key, value] ) => {
        return (   // PROBLEM SHOULD RETURN
          
            <td className="border-r border-gray-400 px-6 py-4" key={key}>{ key }</td>
          
          
        );
      }
      ) }
            </td>
            <tr className="border-b border-gray-400 bg-white">
            { Object.entries( value || "" ).map( ( [key, value] ) => {
        return (   // PROBLEM SHOULD RETURN
          
            <td className="border-r border-gray-400 px-6 py-4" key={key}>{ value }</td>
          
          
        );
      }
      ) }
              </tr>

          </tr>
          </div>
        );
      }
      ) }
               
                
                  

            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
};

export default Ashtakvarga;
