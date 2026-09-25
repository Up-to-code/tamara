import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-lapurete-header.html';
import body from '@/components/exact/en-sa-stores-lapurete-body.html';
import footer from '@/components/exact/en-sa-stores-lapurete-footer.html';
import inline from '@/components/exact/en-sa-stores-lapurete.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
