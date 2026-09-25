import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-case-studies-childrensalon-header.html';
import body from '@/components/exact/en-sa-case-studies-childrensalon-body.html';
import footer from '@/components/exact/en-sa-case-studies-childrensalon-footer.html';
import inline from '@/components/exact/en-sa-case-studies-childrensalon.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
