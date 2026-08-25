---
layout: expanded-default
title: Resume
permalink: /resume/

date: 2025-11-24
resume_path: "/assets/documents/Emi_Brown_Resume_Blank.pdf"
---

<div class="resume-container">
  <div class="resume-header">
    <p>Last updated: {{ page.date }}</p>
    <a href="{{ page.resume_path | relative_url }}" download><button class="resume-download-button">Download Resume</button></a>
  </div>
  
  <div class="resume-viewer">
    <object data="{{ page.resume_path | relative_url }}#view=FitH&zoom=page-fit" type="application/pdf" class="resume-pdf">
      <p>Unable to display this PDF file. <a href="{{ page.resume_path | relative_url }}" type="application/pdf">Download Resume PDF</a> instead.</p>
    </object>
  </div>
</div>