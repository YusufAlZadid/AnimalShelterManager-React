import { MedicalForm } from "@/components/medical/medical-form"

export default function NewMedicalRecordPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">New Medical Record</h1>
      </div>
      <MedicalForm />
    </div>
  )
} 