#Service name will need to be added to cli Example .\checksrv.ps1 node

param
(
[string]$service
)


Write-Host $service

$servers = Get-Content -Path H:\Coding\node\servers.txt

if($servers){

Foreach ($i in $servers)
{
   $i 
}

#Check Servers and Status on Service
#Get-Service -Name $service -ComputerName $i | Start-Service
Get-Service -ComputerName $i -Name $service | Select Name, MachineName, Status

} else {
    echo 'Error - Program did not Run'
    break
}