import React from 'react';

class MainNav extends React.Component {
    render() {
        return(
            <div className="w-full">
            <div class="fixed bottom-0 flex justify-center shadow-lg bg-gradient-to-t from-gray-100 to to-transparent">
                <div class="absolute rounded-full shadow-lg">
                    <svg 
                        class="" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48">
                      <g 
                        id="mainNavSearchButton" 
                        data-name="Group 150" 
                        transform="translate(-164 -708)">
                       <circle id="Ellipse_1" data-name="Ellipse 1" cx="24" cy="24" r="24" transform="translate(164 708)" fill="#0f5"/>
                       <path id="Path_2" data-name="Path 2" d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z" transform="translate(176 720)" fill="#fff"/>
                     </g>
                    </svg>
                </div>
                <div class="pt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="384" height="80" viewBox="0 0 384 80">
                        <path id="Subtraction_3" data-name="Subtraction 3" d="M384,112H0V32H160a32,32,0,0,0,64,0H384v80Z" transform="translate(0 -32)" fill="#fff"/>
                    </svg>
                </div>
                <div class="absolute flex flex-row justify-between bottom-0 w-full">
                    <div class="flex justify-center items-center w-20 h-20 border-t-2 border-green-300">
                        <svg class="inline-block align-bottom" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path id="mainNavAccountIcon" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM7.07,18.28c.43-.9,3.05-1.78,4.93-1.78s4.51.88,4.93,1.78a7.925,7.925,0,0,1-9.86,0Zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36,2.33a8,8,0,1,1,12.72,0ZM12,6a3.5,3.5,0,1,0,3.5,3.5A3.491,3.491,0,0,0,12,6Zm0,5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,11Z" transform="translate(-2 -2)" fill="#606060"/>
                        </svg>
                    </div>
                    <div class="flex justify-center items-center w-20 h-20 border-t-2 border-green-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path id="mainNavTournamentIcon" d="M20.778,5.222H18.556V3H7.444V5.222H5.222A2.229,2.229,0,0,0,3,7.444V8.556a5.546,5.546,0,0,0,4.878,5.489,5.566,5.566,0,0,0,4.011,3.289v3.444H7.444V23H18.556V20.778H14.111V17.333a5.566,5.566,0,0,0,4.011-3.289A5.546,5.546,0,0,0,23,8.556V7.444A2.229,2.229,0,0,0,20.778,5.222ZM5.222,8.556V7.444H7.444v4.244A3.345,3.345,0,0,1,5.222,8.556ZM13,15.222a3.343,3.343,0,0,1-3.333-3.333V5.222h6.667v6.667A3.343,3.343,0,0,1,13,15.222Zm7.778-6.667a3.345,3.345,0,0,1-2.222,3.133V7.444h2.222Z" transform="translate(-3 -3)" fill="#606060"/>
                        </svg> 
                    </div>
                    <div class="flex justify-center w-20"></div>
                    <div class="flex justify-center items-center w-20 h-20 border-t-2 border-green-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.999" height="20.001" viewBox="0 0 16.999 20.001">
                            <path id="mainNavGolfIcon" d="M50-914c0-.74,1.21-1.38,3-1.73V-914h2v-18l8,3.92-6,3.06v9.05c2.84.159,5,.979,5,1.969,0,1.1-2.69,2-6,2S50-912.9,50-914Zm14-.5a1.5,1.5,0,0,1,1.5-1.5,1.5,1.5,0,0,1,1.5,1.5,1.5,1.5,0,0,1-1.5,1.5A1.5,1.5,0,0,1,64-914.5Z" transform="translate(-50 932)" fill="#606060"/>
                        </svg>
                    </div>
                    <div class="flex justify-center items-center w-20 h-20 border-t-2 border-green-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                            <g id="mainNavMenuIcon" transform="translate(-324.5 -750.5)">
                                <line id="Line_2" data-name="Line 2" x2="20" transform="translate(326 752)" fill="none" stroke="#0f5" stroke-linecap="round" stroke-width="3"/>
                                <line id="Line_3" data-name="Line 3" x2="20" transform="translate(326 762)" fill="none" stroke="#0f5" stroke-linecap="round" stroke-width="3"/>
                             <line id="Line_4" data-name="Line 4" x2="20" transform="translate(326 772)" fill="none" stroke="#0f5" stroke-linecap="round" stroke-width="3"/>
                            </g>
                        </svg> 
                    </div>
                </div>
            </div>
            </div>

        )
    }
}

export default MainNav;
